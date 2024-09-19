import { Drinks } from "../types";

const api = {
    drink: { 
        list: async (): Promise<Drinks[]> => {
            return fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSsjVwDTTlJGFXe4fsHVVKaHH_rwoYEezikCB1M6n1TW7r8TsE_0fnVIUo-pV6hjw/pub?output=tsv'
            ).then(res => res.text()) 
            .then(text => {
                return text.split('\n').slice(1).map(row => {
                    const [rank, brand, crp] = row.split('\t')
                    return { rank: parseInt(rank), brand, crp: parseInt(crp) }
                })
            })
        }
    }
}

export default api