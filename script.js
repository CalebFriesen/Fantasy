const leagueAverage = {
    R: 390,
    RBI: 34,
    AB: 157,
    H: 39,
    TB: 153,
    SB: 9
};

// fill average row
window.onload = function () {
    document.getElementById("avg_R").value = leagueAverage.R;
    document.getElementById("avg_RBI").value = leagueAverage.RBI;
    document.getElementById("avg_AB").value = leagueAverage.AB;
    document.getElementById("avg_H").value = leagueAverage.H;
    document.getElementById("avg_TB").value = leagueAverage.TB;
    document.getElementById("avg_SB").value = leagueAverage.SB;
};

function calculateValues() {
    const rows = document.querySelectorAll("#playerTable tbody tr");

    rows.forEach((row, index) => {
        if (index === 0) return; // skip average row

        const inputs = row.querySelectorAll("input");

        const R = Number(inputs[1].value);
        const RBI = Number(inputs[2].value);
        const AB = Number(inputs[3].value);
        const H = Number(inputs[4].value);
        const TB = Number(inputs[5].value);
        const SB = Number(inputs[6].value);

        const value =
            (R - leagueAverage.R) +
            (RBI - leagueAverage.RBI) +
            (TB - leagueAverage.TB) +
            (SB * (100 / leagueAverage.SB)) +
            ((H - (AB * (leagueAverage.H / leagueAverage.AB))));

        row.querySelector(".total").innerText = value.toFixed(2);
    });
}