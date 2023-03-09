const resultContainer = document.getElementById('results')
let currentYear = 2022
let currentRound = 1

async function getStandings(currentYear,currentRound) {

    const response = await fetch(`https://ergast.com/api/f1/${currentYear}/${currentRound}/driverStandings.json`)
    const data = await response.json()
    console.log(data)

    resultContainer.innerHTML = `
    <tr>
        <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position}</th>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName} 
        ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].name}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points}</td>
    </tr>
    <tr>
        <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].position}</th>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName} 
        ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].name}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points}</td>
    </tr>
    <tr>
        <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].position}</th>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName} 
        ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].name}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points}</td>
    </tr>
    <tr>
        <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].position}</th>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName} 
        ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].name}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points}</td>
    </tr>
    <tr>
        <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].position}</th>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName} 
        ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].name}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points}</td>
    </tr>
    <tr>
        <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].position}</th>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName} 
        ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].name}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points}</td>
    </tr>
    <tr>
        <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].position}</th>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName} 
        ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].name}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points}</td>
    </tr>
    <tr>
        <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].position}</th>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.givenName} 
        ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].Constructors[0].name}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[7].points}</td>
    </tr>
    <tr>
        <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].position}</th>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Driver.givenName} 
        ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].Constructors[0].name}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[8].points}</td>
    </tr>
    <tr>
        <th scope="row">${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].position}</th>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Driver.givenName} 
        ${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Driver.familyName}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Driver.nationality}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].Constructors[0].name}</td>
        <td>${data.MRData.StandingsTable.StandingsLists[0].DriverStandings[9].points}</td>
    </tr>
        `
}

const standingsSearchForm = document.getElementById('standingsSearch')

standingsSearchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const yearInput = standingsSearchForm.querySelector('#year')
    const roundInput = standingsSearchForm.querySelector('#round')
    currentYear = yearInput.value
    currentRound = roundInput.value

    getStandings(currentYear, currentRound)
    yearInput.value = ''
    roundInput.value = ''
})

