import { NextResponse } from "next/server"

export async function GET() {
    try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vSsjVwDTTlJGFXe4fsHVVKaHH_rwoYEezikCB1M6n1TW7r8TsE_0fnVIUo-pV6hjw/pub?output=tsv')
        const str_response = await response.json()

        console.log('Response:', response)
        console.log('Str response:', str_response)
        
        if (response.status === 200) {
            console.log('Data retrieved succesfully: ', str_response)

            return NextResponse.json({ status: response.status , message: 'Successfully GOT data', data: str_response.data  })
        }

    } catch {
        return console.error('Failed to get data :(')
    }
}