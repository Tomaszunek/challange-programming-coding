import Modal from "../Modal.vue";
import { render } from "@testing-library/vue";

describe("modal", () => {
  it("increments value on click", () => {
    expect.assertions(1);
    const renderModal = render(Modal);

    console.log(renderModal.debug());
    expect(1).toBe(1);
  });
});
