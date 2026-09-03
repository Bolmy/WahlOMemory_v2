import config from './config.json'
import { getElectionInfoStatic, getElectionSponsorsStatic, getElectionPartiesStatic } from './StaticModeAssets/StaticQuery.js'

export async function getElectionInfo(electionID) {
    if (!config.useBackend) {
        return getElectionInfoStatic(electionID)
    }

    if (!electionID) {
        console.log('Missing ElectionID')
        return null
    }

    try {
        const response = await fetch(`${config.endpoint}/election?id=${encodeURIComponent(electionID)}`)
        if (!response.ok) {
            console.error('Failed to fetch election info:', response.statusText)
            return null
        }
        return await response.json()
    } catch (error) {
        console.error('Error fetching election info:', error)
        return null
    }
}

export async function getElectionSponsors(election) {
    if (!config.useBackend) {
        return getElectionSponsorsStatic(election)
    }

    console.log('getElectionSponsors: ')
    var sponsors = election.sponsors

    var logos = []
    for (let sponsor of sponsors) {
        logos.push(sponsor)
    }
    const queryString = '?' + logos.map(file => `file=${encodeURIComponent(file)}`).join('&')

    try {
        const response = await fetch(`${config.endpoint}/api/svgs${queryString}`)
        if (!response.ok) {
            console.error('Failed to fetch party logos:', response.statusText)
            return null
        }
        var logoResponse = await response.json()
        for (var i = 0; i < logoResponse.length; i++) {
            sponsors[i] = logoResponse[i].data
        }
        return { sponsors: sponsors }
    } catch (error) {
        console.error('Error fetching election logos:', error)
        return null
    }
}

export async function getElectionParties(election) {
    if (!config.useBackend) {
        return getElectionPartiesStatic(election)
    }

    console.log('getElectionParties: ')
    var parties = election.parties

    var logos = []
    for (let party of parties) {
        logos.push(party.logo)
    }
    const queryString = '?' + logos.map(file => `file=${encodeURIComponent(file)}`).join('&')

    try {
        const response = await fetch(`${config.endpoint}/api/svgs${queryString}`)
        if (!response.ok) {
            console.error('Failed to fetch party logos:', response.statusText)
            return null
        }
        var logoResponse = await response.json()
        for (var i = 0; i < logoResponse.length; i++) {
            parties[i].logo = logoResponse[i].data
        }
        return { parties: parties }
    } catch (error) {
        console.error('Error fetching election logos:', error)
        return null
    }
}