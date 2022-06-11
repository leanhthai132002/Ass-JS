
import router from "./helpers/router";
import Footer from "./layout/client/Footer";
import Header from "./layout/client/Header";
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';

const render = async (content, id) => {
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content.render(id);
    document.querySelector('#footer').innerHTML = Footer.render();

    //sau khi content đã render xong thì afterrender mới được chạy
    if (content.afterRender) {
        content.afterRender(id);
    }
}
router.on({
    '/': () => render(Home),
    '/products': () => render(Product),
    '/products/add': () => render(ProductAdd),
    '/products/detail/:id': (data) => render(ProductDetail, data.data.id),
    '/products/edit/:id': (data) => render(ProductAdd, data.data.id)
});
router.resolve();
