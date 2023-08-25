import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "./Contact";

export function Layout() {
  return (
    <nav className="container-fluid p-3 Bgo text-white text-center row">
      <img src={"logos.png"} alt="Logo" className="photo rounded-circle" />
      <NavLink
        to="/"
        className="link px-2 col-sm-2 mt-3 Editfo siligon"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        หน้าหลัก
      </NavLink>
      <NavLink
        to="/contact"
        className="link px-2 col-sm-1 mt-3 Editfo siligon"
        style={({ isActive }) => {
          return {
            textDecoration: isActive ? "none" : "underline",
          };
        }}
      >
        ผู้จัดทำ
      </NavLink>
    </nav>
  );
}

export function Footer() {
  return (
    <div class="container-fluid Bgo p-3 mt-5 text-center">
      <nav class="row">
        <div className="col-sm-2 mt-2">
          <h3 className="Editfo siligon01">@ 2023</h3>
        </div>
        <div className="col-sm-3 mt-2 siligon02">
          <h3 className="Editfo siligon02">ผู้จัดทำ : Kamonrat S.</h3>
        </div>
        <div class="col-sm-5 ">
          <></>
        </div>
        <div className="col-sm-2 mt-2 siligon02">
          <h3 className="Editfo">Back to top</h3>
        </div>
      </nav>
    </div>
  );
}

function Index() {
  return (
    <>
      <Layout />
      <div class="container mt-5">
        <div class="row">
          <div className="polygon col-sm-12 p-2 text-center">
            <h3>วิธีทำอาหารญี่ปุ่นยอดฮิต</h3>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={"donburi.jpg"}
              alt="ข้าวหน้าเนื้อดงบุริ"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ข้าวหน้าเนื้อดงบุริ</h3>
            <p className="Lumideim p-2">
              สูตร ข้าวหน้าเนื้อ สไตล์ เมนูอาหารญี่ปุ่น ของ Youtuber ช่อง Chef
              Bas Fast Food ถอดแบบมาจากข้าวหน้าเนื้อญี่ปุ่นแท้ ๆ เลยก็ว่าได้
              โดยเฉพาะในส่วนของซอสผัด ที่ใช้น้ำซุปดาชิ มิริน และ ซอสโชยุ
              เป็นส่วนผสม ซึ่งถ้าหากใครอยากทำให้เหมือนต้นฉบับ ทำตามสูตรนี้ได้เลย
              รับรองว่า ไม่ผิดหวัง
            </p>
            <button type="button" class="button btn btn-secondary Alumineam">
              ดูวิธีทำ>>
            </button>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={"ramen.jpg"}
              alt="ราเมนหมูชาชู"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ราเมนหมูชาชู</h3>
            <p className="Lumideim p-2">
              ราเมน เมนูอาหารญี่ปุ่น แบบเส้น ที่คนไทยหลายคนชื่นชอบ
              ไม่แพ้การกินก๋วยเตี๋ยวแบบจีน เพราะให้รสชาติของน้ำซุปที่เข้มข้น
              แถมเส้นยังหนานุ่ม ยิ่งกินกับหมูชาชูสูตร ยิ่งอร่อย
              ซึ่งถ้าหากใครอยากทำทานเองที่บ้าน ไม่ต้องไปกินที่ร้าน ชามละ 200 –
              300 บาท แล้วละก็ ทำตามสูตรนี้ได้เลย รับรองว่า อร่อยไม่แพ้กัน
            </p>
            <button type="button" class="button btn btn-secondary Alumineam">
              ดูวิธีทำ>>
            </button>
          </div>
          <div class="col-sm-4 text-center">
            <img
              src={"Yakisoba.jpg"}
              alt="ยากิโซบะ"
              className="picher rounded-circle mt-3"
            />
            <h3 className="nitrogen mt-3 ">ยากิโซบะ</h3>
            <p className="Lumideim p-2">
              ยากิโซบะ สูตรนี้ ใช้วัตถุดิบแบบดั้งเดิมที่นิยมใช้กัน นั่นคือ
              เส้นยากิโซบะ เนื้อหมู กะหล่ำปลี แครอท ถั่วงอก
              ผัดคลุกเคล้าเข้าด้วยกัน ด้วยซอสแบบโฮมเมด ให้รสชาติแบบที่เราคุ้นเคย
              โดยสูตรนี้เป็นเมนูอาหารญี่ปุ่น
              แบบที่แม่บ้านชาวญี่ปุ่นทำกันเลยทีเดียว บอกต่อจากช่อง Just One
              Cookbook มาดูกันว่า ยากิโซบะแบบดั้งเดิมจากญี่ปุ่น
              มีวิธีการทำอย่างไร
            </p>
            <button type="button" class="button btn btn-secondary Alumineam">
              ดูวิธีทำ>>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Container className="p-3 my-3 bg-light">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
