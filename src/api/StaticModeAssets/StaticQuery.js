import { getAllElections, getElectionById } from './electionLoader.js'
import { getSvgData } from './SVGLoader.js'

export async function getElectionsStatic() {
    return getAllElections()
}

export async function getElectionInfoStatic(electionID) {
    if (!electionID) {
        console.log('Missing ElectionID')
        return null
    }
    return getElectionById(electionID)
}

export async function getElectionSponsorsStatic(election) {
    if (!election || !election.sponsors) {
        console.error('No sponsors found')
        return { sponsors: [] }
    }
    const sponsors = [...election.sponsors] // flache Kopie
    const svgData = getSvgData(sponsors)
    const newSponsors = svgData.map(item => item.data)
    return { sponsors: newSponsors }
}

export async function getElectionPartiesStatic(election) {
    if (!election || !election.parties) {
        console.error('No parties found')
        return { parties: [] }
    }
    // Erstelle flache Kopien der Partei-Objekte, um Original nicht zu verändern
    const parties = election.parties.map(party => ({ ...party }))
    const svgData = getSvgData(parties.map(p => p.logo))
    parties.forEach((party, i) => {
        party.logo = svgData[i].data
    })
    return { parties }
}