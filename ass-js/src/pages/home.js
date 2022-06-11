import { getBooks, deleteBook } from "../api/book";
import reRender from '../helpers/reRender';

const Home = {
    
    render: () => `
    <div class="container">
    
    <div class="row">

      <div class="col-md-3">
        <div class="card mb-3 box-shadow">
          <img src="https://i.imgur.com/ZfTboio.png" alt="">
          <div class="card-body">
            <p class="card-text"></p>
            <div class="price-group">
              <del class="old-price" style="text-decoration: line-through;">300.000đ</del> 
              <span class="price sale-price" style="color: #d71a00;">250.000đ</span> 
              <span class="badge" style="background-color: #d71a00;">30%</span></div>
            </div>
          <button type="button" class="btn btn-sm btn-outline-secondary">Add to cart</button>
        </div>
      </div>



    </div>
  </div>
    `
};

export default Home;