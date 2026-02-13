//เปิดซองจดหมายแล้วข้อความเปลี่ยน
const envelope = document.querySelector(".wrapper");

envelope.addEventListener("click", () => {
  envelope.classList.add("active");
  setTimeout(() => {
    document.getElementById("text").textContent =
    "when you finish reading, click continue";
  }, 400);
});

const wrapper = document.getElementById("wrapper");
const text = document.getElementById("text");
const button = document.getElementById("continue");
const roses = document.querySelector(".roses");

wrapper.addEventListener("click", () => {
    wrapper.classList.add("active");

    text.classList.remove("animate");
    void text.offsetWidth; // reset animation
    text.classList.add("animate");

    button.classList.remove("animate");
    void button.offsetWidth; // reset animation
    button.classList.add("animate");
});

button.addEventListener("click", () => {
    document.querySelector(".scene2").classList.add("show");

    roses.classList.remove("animate");
    void text.offsetWidth; // reset animation
    roses.classList.add("animate");

    text2.classList.remove("animate");
    void text.offsetWidth; // reset animation
    text2.classList.add("animate")

    topText.classList.remove("animate");
    void text.offsetWidth; // reset animation
    topText.classList.add("animate");

    img1.classList.remove("animate");
    void img1.offsetWidth; // reset animation
    img1.classList.add("animate");

    img2.classList.remove("animate");
    void img2.offsetWidth; // reset animation
    img2.classList.add("animate");

    img3.classList.remove("animate");
    void img3.offsetWidth; // reset animation
    img3.classList.add("animate");

    img4.classList.remove("animate");
    void img4.offsetWidth; // reset animation
    img4.classList.add("animate");

});