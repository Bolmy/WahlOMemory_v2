import config from './config.json'
import { getElectionsStatic } from './StaticModeAssets/StaticQuery.js'

export async function getElections() {
    if (!config.useBackend) {
        return getElectionsStatic()
    }

    try {
        const response = await fetch(`${config.endpoint}/elections`)
        if (!response.ok) {
            throw new Error(`Failed to fetch elections: ${response.statusText}`)
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching elections:', error)
        throw error
    }
}