home_folder = "http://geekwisevinson.github.io/home/";
auto_run=[
    "alert('hi')",
    "alert('thanks')"
];

function mouser(event) {
    switch (event.which) {
        case 1:
            alert('Left Mouse button pressed.');
            break;
        case 2:
            alert('Middle Mouse button pressed.');
            break;
        case 3:
            alert('Right Mouse button pressed.');
            break;
        default:
            alert('You have a strange Mouse!');
    }
}
