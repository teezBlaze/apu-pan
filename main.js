const fragment = document.createDocumentFragment();

async function splitAndAppend(split_text_el, cssSelector){
    let split_text_el_array = split_text_el.split("");
    split_text_el_array.forEach((item, index) => {
        const ELEMENT = Object.assign(
            document.createElement("span"),
            {
                className: "move_up_animation",
                style: `display:inline-block; --delay-test: ${1.8 + index*0.08}s;`,
                innerText: item,
            }
        )
        fragment.appendChild(ELEMENT);
    })
    document.querySelector(cssSelector).appendChild(fragment);
}

splitAndAppend("APU", "#left_text")
splitAndAppend("PAN", "#right_text")