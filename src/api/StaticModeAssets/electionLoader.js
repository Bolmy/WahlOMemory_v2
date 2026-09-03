// Lädt alle .json-Dateien im Ordner './Elections' und importiert sie als Module
const electionModules = import.meta.glob('./Elections/*.json', { eager: true })

const elections = []
for (const [path, module] of Object.entries(electionModules)) {
    // JSON-Dateien werden als Modul mit Default-Export importiert
    elections.push(module.default)
}

export function getAllElections() {
    // Tiefe Kopie jedes Objekts, um Mutationen zu vermeiden
    return elections.map(election => structuredClone(election))
}

export function getElectionById(id) {
    const election = elections.find(e => e.electionUId === id)
    return election ? structuredClone(election) : null
}