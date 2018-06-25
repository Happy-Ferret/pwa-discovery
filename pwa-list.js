async function listPWA() {
  let list = document.getElementById("list");
  let {manifests} = await browser.storage.local.get("manifests");
  manifests = manifests || [];
  manifests.forEach(item => {
    let el = document.createElement("div");
    // el.textContent = JSON.stringify(item);
    let icon = document.createElement("img");

    let url = new URL(getBestIcon(128, item.icons).src, item.___manifest_url___);
    icon.src = url.href;
    el.appendChild(icon);

    let title = document.createElement("span");
    title.textContent = item.short_name || item.name;
    el.appendChild(title);

    icon.onclick = async () => {
      let start_url = new URL(item.start_url, item.___manifest_url___);
      let win = await browser.windows.create({
        url: start_url.href,
        type: "panel"
      });
      // await new Promise(r => setTimeout(r, 1000));
      // browser.theme.update(win.id, {
      //   colors: {
      //     accentcolor: item.background_color,
      //     textcolor: item.theme_color,
      //   }
      // });
    };
    list.appendChild(el);
  });
}

var search = input = document.getElementById("myInput");

search.addEventListener("input", myFunction);

search.onkeyup="test()"

function test(){
  console.log("TEST")
}


listPWA();

function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("list");
  li = ul.getElementsByTagName("div");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("span")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";

      }
  }
}