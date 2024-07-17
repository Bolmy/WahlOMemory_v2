import questions from "@/../data/thüU18ElectionData.json"
import parties from "@/../data/thüU18Parties.json"

export async function getElectionInfo(electionID) {
    if (electionID!=="ThüU18_2024"){
        console.log("Unknown ElectionID:", electionID)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, 1000); // Simulate a 1-second delay
        });
    }
     return new Promise((resolve) => {
         setTimeout(() => {
             resolve(
                 questions
             );
         }, 1000); // Simulate a 1-second delay
     });
 }

export async function getElectionParties(electionID) {
    if (electionID!=="ThüU18_2024"){
        console.log("Unknown ElectionID:", electionID)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(null);
            }, 1000); // Simulate a 1-second delay
        });
    }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                parties
            );
        }, 1000); // Simulate a 1-second delay
    });
}