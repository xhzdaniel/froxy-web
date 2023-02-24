function activar_desactivar(info) {
    switch (info) {
        case "todos": {
            if (document.getElementById('todos').checked) {
                document.getElementById('div-todos').style.display = "flex";
                document.getElementById('div-music').style.display = "none";
                document.getElementById('div-config').style.display = "none";
                document.getElementById('div-otros').style.display = "none";

                document.getElementById('btntodos').style.background = "lightseagreen";
                document.getElementById('btnmusic').style.background = "#1D1E21";
                document.getElementById('btnconfig').style.background = "#1D1E21";
                document.getElementById('btnotros').style.background = "#1D1E21";
            }
        }
            break;
        case "music": {
            if (document.getElementById('music').checked) {
                document.getElementById('div-music').style.display = "flex";
                document.getElementById('div-todos').style.display = "none";
                document.getElementById('div-config').style.display = "none";
                document.getElementById('div-otros').style.display = "none";

                document.getElementById('btntodos').style.background = "#1D1E21";
                document.getElementById('btnmusic').style.background = "lightseagreen";
                document.getElementById('btnconfig').style.background = "#1D1E21";
                document.getElementById('btnconfig').style.background = "#1D1E21";
            }
        }
            break;
        case "config": {
            if (document.getElementById('config').checked) {
                document.getElementById('div-config').style.display = "flex";
                document.getElementById('div-todos').style.display = "none";
                document.getElementById('div-music').style.display = "none";
                document.getElementById('div-otros').style.display = "none";

                document.getElementById('btntodos').style.background = "#1D1E21";
                document.getElementById('btnmusic').style.background = "#1D1E21";
                document.getElementById('btnconfig').style.background = "lightseagreen";
                document.getElementById('btnotros').style.background = "#1D1E21";
            }
        }
            break;
        case "otros": {
            if (document.getElementById('otros').checked) {
                document.getElementById('div-otros').style.display = "flex";
                document.getElementById('div-todos').style.display = "none";
                document.getElementById('div-config').style.display = "none";
                document.getElementById('div-music').style.display = "none";

                document.getElementById('btntodos').style.background = "#1D1E21";
                document.getElementById('btnmusic').style.background = "#1D1E21";
                document.getElementById('btnconfig').style.background = "#1D1E21";
                document.getElementById('btnotros').style.background = "lightseagreen";
            }
        }
            break;
        default: {
            document.getElementById('div-todos').style.display = "flex";

            document.getElementById('btntodos').style.background = "#1D1E21";
            document.getElementById('btnmusic').style.background = "#1D1E21";
            document.getElementById('btnconfig').style.background = "#1D1E21";
            document.getElementById('btnotros').style.background = "#1D1E21";
        }
    }
}