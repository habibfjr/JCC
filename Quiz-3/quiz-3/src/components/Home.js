import React from 'react'



function Home (){
    return(

    <div className="row">
          <div className="section">
            <div className="card">
              <div>
                <h2>bame</h2>
                <h5>Release Year : year</h5>
                <img className="fakeimg" style={{width: '50%', height: '300px', objectFit: 'cover'}} src />
                <br />
                <br />
                <div>
                  <strong>Price: price</strong><br />
                  <strong>Rating: rating</strong><br />
                  <strong>Size: size</strong><br />
                  <strong style={{marginRight: '10px'}}>Platform : Android &amp; IOS
                  </strong>
                  <br />
                </div>
                <p>
                  <strong style={{marginRight: '10px'}}>Description :</strong>
                  {'{'}item.description{'}'}
                </p>
                <hr />
              </div>
            </div>
          </div>
          <footer>
          <h5>© Quiz 3 ReactJS Jabarcodingcamp</h5>
        </footer>
        </div>
    )
}
export default Home