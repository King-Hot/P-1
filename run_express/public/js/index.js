import Home from "./mainpage.js";
import Posts from "./Posts.js";
import LoginPage from "./Loginpage.js";
import NotFound from "./NotFound.js";
import freeboard from "./freeboard.js";

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/posts", view: Posts },
        { path: "/LoginPage", view: LoginPage },
        { path: "/free_board", view : freeboard },
    ];

    const pageMatches = routes.map((route) => {
        return {
            route,
            isMatch: route.path === location.pathname,
        };
    });
    let match = pageMatches.find((pageMatch) => pageMatch.isMatch);

    if (!match) {
        match = {
            route: location.pathname,
            isMatch: true,
        };
        const page = new NotFound("#root");
        //document.querySelector("#root").innerHTML = await page.getHtml();
    } else {
        const page = new match.route.view("#root");
        //await page.export();
        //document.querySelector("#root").innerHTML = await page.getHtml();
        //
    }
};

window.addEventListener("popstate", () => {
    router();
});

document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState(null, null, e.target.href);
        router();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    router();
});