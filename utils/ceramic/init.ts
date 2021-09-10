import CeramicClient from '@ceramicnetwork/http-client'
import ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import KeyDidResolver from 'key-did-resolver'
import { ThreeIdConnect } from '@3id/connect'
import { NearAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'
import { DID } from 'dids'
import { IDX } from '@ceramicstudio/idx'


// config 

export const endpoint = "https://ceramic-clay.3boxlabs.com"
export const NEAR_CHAIN_REF = "near-testnet"


/**
 * ### Read IDX Profile
 * @param address - string
 */

export const readProfile = async (address: string) => {

  const ceramic = new CeramicClient(endpoint)
  const idx = new IDX({ceramic})

  try {
    const data = await idx.get(
      'basicProfile',
      `${address}`
    )
    console.log('PROFILE : => ', data)
    //   if (data.name) setName(data.name)
    //   if (data.avatar) setImage(data.avatar)
  } catch (error) {
    console.log( "ERROR : => ( CANNOT READ PROFILE ) :",error)
  }
      
}

export const updateProfile = async (address: string, name: string, avatar: string, chainRef : string) => {

  const nearProvider = window.near.connection.provider
  const ceramic = new CeramicClient(endpoint)
  const threeIDConnect = new ThreeIdConnect()
  const provider = new NearAuthProvider(nearProvider, address, chainRef)  

  await threeIDConnect.connect(provider)

  const did = new DID(
    {
      provider : threeIDConnect.getDidProvider(),
      resolver : {...KeyDidResolver.getResolver() ,...ThreeIdResolver.getResolver(ceramic)}
    }
  )

  ceramic.setDID(did)

  await ceramic.did.authenticate()

  const idx = new IDX({ceramic})

  idx.set('basicProfile', { name, avatar}).then(() => {
    console.log('Profile updated!')
  }).catch(error => {throw new Error(error)})

}

export const setDefaultProfile = async (address: string, chainRef : string) => {

  const nearProvider = await window.near.connection.provider
  const ceramic = new CeramicClient(endpoint)
  const threeIDConnect = new ThreeIdConnect()
  const provider = new NearAuthProvider(nearProvider, address, chainRef)  
  
  await threeIDConnect.connect(provider)
  
  const did = new DID(
    {
      provider : threeIDConnect.getDidProvider(),
      resolver : {...KeyDidResolver.getResolver() ,...ThreeIdResolver.getResolver(ceramic)}
    }
  )
  
  ceramic.setDID(did)
  
  await ceramic.did.authenticate()
  
  const idx = new IDX({ceramic})

  idx.set('basicProfile', 
    { 
      name : "Doge Boi", 
      avatar : "https://upload.wikimedia.org/wikipedia/en/d/d0/Dogecoin_Logo.png"
    })
    .then(() => {
      console.log('Profile set to DOGE BOI!')
    })
    .catch(error => {throw new Error(error)})

}