function update() {
    let b = document.createElement('br');
    let details = document.createElement('details');
    let summary = document.createElement('summary');
    details.setAttribute("id", "stats");
    summary.innerText = "Changes in DOM";
    document.body.append(b);
    document.body.appendChild(details).appendChild(summary);
    document.getElementById("stats").style.fontSize ="x-small";
}

update();