home_folder = "http://geekwisevinson.github.io/home/";
auto_run=[
    "alert('hi')",
    "alert('thanks')"
];

function mouse_check(event) {
    event.preventDefault();
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
