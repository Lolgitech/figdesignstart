import Footer from "../footer";
function LandingPage() {
  return (
    <>
      <main>
        <section className="Hero">
          <h2 className="section title">RANDOM HEADLINE</h2>
          <small>
            My dream job has always been a concept designer, Im an idealist by
            heart, and I love sitting down brainstorming creative new concepts &
            ideas that can benefit tomorrows world.
          </small>
        </section>
        <section className="intro">
          <h2 className="section-title hero">
            The future is AI driven
            <span className="text-primary"> it will CREATE</span> Tomorrow's
            solutions.
            <span className="text-primary"> This is one IDEALIST's</span>{" "}
            digital journey.
          </h2>
        </section>
        <section className="about-us">
          <header className="about-us__intro">
            <h2 className="section-title-small"></h2>
          </header>
          <div className="about-us__body"></div>
          <p>
            <p>Another Gamer has entered the stage.</p>
            <p>
              <b>But not any Gamer </b>
            </p>
            <strong>This gamer beat the world champion in starcraft.</strong>
            <p>I have basically played all the games there are.</p> I have been
            in every dungeon, every battle field and every virtual galaxy &
            Dimension there is.
          </p>
          <p>
            This has given me a unique view of game layouts, UIs, web-pages and
            a tonn of different interests both in the real world and online.
            <p>
              Ranging from Virtual Reality, Augmented Reality, Artificial
              Intelligence, Dropshipping and to the crypto industry.
            </p>
          </p>
        </section>
            
        <section>
          <h2 className="section-title hero">
            <small>Work experiences before i was "reborn"</small>
          </h2>
          <h3>
            <p>
              My main work was focused in the logistics industry, warehouses and
              trucks were my bread and butter, and I did that for 17 years.
            </p>
            <p>
              Other ventures I have had include running my own house
              rehabilitation company (AS).
            </p>
            <p>
              I worked as a promoter for a virtual reality corporation where my
              job description would be rigging up equipment at different
              promotion sites such as schools, universities, and GamesCon. I
              also did some work on branding for the company.
            </p>
            <p>
              After finishing my education in child and youth work, I worked as
              a teacher assistant at a pre-school for a year.
            </p>
            <p>
              I worked at a youth center in Stavanger where we taught kids how
              to video edit, make music using Nuendo, and rig up equipment for
              small to medium concerts. We also had photography classes with our
              own darkroom where we produced the pictures we had taken.
            </p>
          </h3>
        </section>
        <section className="order-online">
          <header>
            <h2 className="section-title text-primary"></h2>
          </header>
          <p></p>
          <div className="btn-group">
            <a href="mailto:benbowremi@gmail.com" className="btn btn-primary my-btn">
              Email
            </a>
            <a
              href="https://www.facebook.com/remi.benbow"
              className="btn btn-primary my-btn"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/remibenbow"
              className="btn btn-primary my-btn"
            >
              Instagram
            </a>
          </div>
        </section>

        <section className="product-showcase">
          <header>
            <h2 className="section-title text-primary"> Some of my work</h2>
          </header>
          <div className="products">
            <div className="product">
              <img
                src="../assets/images/75262127_10162356367435007_7480720663167107072_n.jpg"
                alt=""
                className="product__img"
              />
              <div className="product__content">
                <h3 className="product__title">Drum kit</h3>

                <div className="fineprint">True Quality.</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illo, facilis. Aliquid dolores necessitatibus consectetur
                  laudantium tempora omnis assumenda deleniti praesentium?
                </p>
              </div>
            </div>
            <div className="product">
              <img
                src="./assets/images/75262127_10162356367435007_7480720663167107072_n.jpg"
                alt=""
                className="product__img"
              />
              <div className="product__content">
                <h3 className="product__title">Story tell</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo officiis asperiores nobis ducimus repellat fugit
                  natus facilis perferendis voluptatibus repudiandae!
                </p>
                <div className="fineprint">cetified</div>
              </div>
            </div>
            <div className="product">
              <img
                src="./assets/images/75262127_10162356367435007_7480720663167107072_n.jpg"
                alt=""
                className="product__img"
              />
              <div className="product__content">
                <h3 className="product__title">Hero Card</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas labore vero commodi esse, impedit sapiente!
                </p>
                <div className="fineprint">
                  <strong>super quality</strong>
                </div>
              </div>
            </div>

            <p className="mb-0">If you want to know more about me:</p>
            <div className="btn group">
              <a href="https://github.com/Lolgitech" className="btn btn-accent">
                see all my work
              </a>
            </div>
            <div className="btn-group">
              <a href="mailto:benbowremi@gmail.com" className="btn btn-primary">
                Connect with me through Email
              </a>
              <a
                href="https://www.facebook.com/remi.benbow"
                className="btn btn-primary"
              >
                lets hook up on Facebook
              </a>
              <a
                href="https://www.linkedin.com/in/remi-benbow-0a3a5210b/"
                className="btn btn-primary"
              >
                Add me on LinkedID
              </a>
              <Footer />
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}

export default LandingPage;
