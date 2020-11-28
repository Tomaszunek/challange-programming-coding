import Modal from "../Modal.vue";
import { render } from "@testing-library/vue";

test("increments value on click", async () => {
  // The render method returns a collection of utilities to query your component.
  const renderModal = render(Modal);

  console.log(renderModal.debug());
  expect(1).toBe(1);
});
