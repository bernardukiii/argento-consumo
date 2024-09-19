import { Drinks, Fastfood } from "../types";

const api = {
    drink: { 
        list: async (): Promise<Drinks[]> => {
            return fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSsjVwDTTlJGFXe4fsHVVKaHH_rwoYEezikCB1M6n1TW7r8TsE_0fnVIUo-pV6hjw/pub?gid=1747342808&single=true&output=tsv'
            ).then(res => res.text()) 
            .then(text => {
                return text.split('\n').slice(1).map(row => {
                    const [rank, brand, crp] = row.split('\t')
                    return { rank: parseInt(rank), brand, crp: parseInt(crp) }
                })
            })
        }
    },

    food: { 
        list: async (): Promise<Fastfood[]> => {
            return fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSsjVwDTTlJGFXe4fsHVVKaHH_rwoYEezikCB1M6n1TW7r8TsE_0fnVIUo-pV6hjw/pub?output=tsv'
            ).then(res => res.text()) 
            .then(text => {
                return text.split('\n').slice(1).map(row => {
                    const [brand, storeQuantity, startingDate, upToDate, infoSource] = row.split('\t')
                    return { 
                        brand,
                        storeQuantity: parseInt(storeQuantity),
                        startingDate: new Date(startingDate),
                        upToDate: new Date(upToDate),
                        infoSource 
                    }
                })
            })
        }
    }
}

export default api