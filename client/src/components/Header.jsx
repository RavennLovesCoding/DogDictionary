import react from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from '../images/tempologo.png'

export default function header() {
return (
    <>
    <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" src={logo} alt="temporary dog dictionary logo" padding="0px" />
        <h1 class="display-5 fw-bold">Dog Body Language Visual Dictionary</h1>
          <div class="col-lg-6 mx-auto">
            <p class="lead mb-4">Have you ever wanted to speak dog? This dictionary is here to help! Select a body area to focus on and the dictionary will provide you with various entries to learn about dog body language. Dogs have been living with humans for at least 30,000 years. They have become very good at understanding us. Now we can get better at understanding them, with the Dog Body Language Visual Dictionary</p>
          </div>
    </div>
  </>
    )
}
