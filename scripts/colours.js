const rainbowBtn = document.querySelector('#rainbow'), path = "../images/";
let i = 0
rainbowBtn.addEventListener("click", () => {
    const gradients = {
        0: "#ccc, #333",
        1: "orange, red",
        2: "yellow, darkorange", 
        3: "yellow, green",
        4: "green, aqua",
        5: "aqua, mediumblue",
        6: "magenta, darkorchid"
    }
    const emojis = {
        0: "&#x1F308;",
        1: "&#x1F388;",
        2: "&#x1F69B;",
        3: "&#x1F4B5;",
        4: "&#x2693;",
        5: "&#x1F50B;",
        6: "&#x1F3C6;"
    }
    if (i === 6) i = 0;
    else i++;
    document.body.style.backgroundImage =
        `radial-gradient(${gradients[i]})`;
    document.querySelector("#calculator").style.backgroundImage =
        `url(${path}${i}.gif)`
    rainbowBtn.style.backgroundImage =
        `radial-gradient(${gradients[i]})`;
    rainbowBtn.innerHTML = emojis[i]
})