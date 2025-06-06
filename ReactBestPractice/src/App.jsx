import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/AccordionItem/AccordionItem";

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>

      <Accordion className="accordion">
  <AccordionItem className="accordion-item" title="We are working with the local guides">
    <article>
      <p>You can’t go wrong with us</p>
      <p>
        We are in the business of planning high-quality footprints for more than 20 years.
      </p>
    </article>
  </AccordionItem>

  <AccordionItem className="accordion-item" title="Personalized experiences for every traveler">
    <article>
      <p>Every journey is unique—just like you.</p>
      <p>
        From solo trips to family adventures, we tailor each itinerary to match your preferences and dreams.
      </p>
    </article>
  </AccordionItem>
</Accordion>

    </section>
  </main>
}

export default App;
