import { createSignal } from "solid-js";

export default function Item({ item }) {
  const [purchased, setPurchased] = createSignal(false);

  return (
    <div
      class="search-results-item"
      style={{ "background-color": purchased() ? "#f1c40f" : "" }}
    >
      <h2 textContent={item().title} />

      <div class="lvpic pic img left">
        <div class="lvpicinner full-width picW">
          <a href={"/buy/" + item().id} class="img imgWr2">
            <img src={item().image} alt={item().title} />
          </a>
        </div>
      </div>

      <span class="price" textContent={item().price} />

      {purchased() ? (
        <div class="purchased">Purchased!</div>
      ) : (
        <button
          class="buy-now"
          type="button"
          onClick={() => setPurchased(true)}
        >
          Buy now!
        </button>
      )}
    </div>
  );
};
