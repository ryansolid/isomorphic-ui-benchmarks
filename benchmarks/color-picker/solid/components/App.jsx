import { createSignal, createEffect } from "solid-js";

function App({ onMount, colors }) {
  const [selectedColorIndex, setSelectedColorIndex] = createSignal(0),
    selectedColor = () => colors[selectedColorIndex()];
  createEffect(() => {
    if (onMount) onMount(setSelectedColorIndex);
    globalThis.onMount && globalThis.onMount();
  });

  return (
    <div class="colors">
      <h1>Choose your favorite color:</h1>
      <div class="colors">
        {/*@once*/ colors.length ? (
          <ul>
            <For each={colors}>
              {({ name, hex }, i) => (
                <li
                  class={
                    "color" + (selectedColorIndex() === i() ? " selected" : "")
                  }
                  style={{
                    "background-color": hex,
                  }}
                  onClick={[setSelectedColorIndex, i()]}
                  textContent={name}
                />
              )}
            </For>
          </ul>
        ) : (
          <div>No colors!</div>
        )}
      </div>
      <div>
        You chose:
        <div class="chosen-color">{selectedColor().name}</div>
      </div>
    </div>
  );
}

export default App;
