
const cardContainer = document.querySelector(".cardContainer");

document.getElementById("a").addEventListener("submit", function (e) {
  e.preventDefault(); // منع التحديث التلقائي للنموذج

  // الحصول على القيم من الحقول
  const fullName = document.getElementById("fullName").value;
  const password = document.getElementById("Password").value;
  const date = document.getElementById("date").value;
  const genderMale = document.querySelectorAll('input[name="rd"]');
  const phone = document.getElementById("Phone").value;
  const order = document.querySelectorAll("input[name='ad']");
  const Option = document.querySelectorAll("input[name='ra']");

  let x;
  for (let i of genderMale) {
    if (i.checked == true) {
      x = i.value;
    }
  }
  console.log(x);

  let a = [];
  for (let j of order) {
    if (j.checked == true) {
      a.push(j.value); // إضافة الطلبات المختارة إلى مصفوفة
    }
  }
  console.log(a);

  let r;
  for (let s of Option) {
    if (s.checked == true) {
      r = s.value;
    }
  }
  console.log(r);

  // تخزين القيم في localStorage
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("password", password);
  localStorage.setItem("date", date);
  localStorage.setItem("gender", x);
  localStorage.setItem("phone", phone);
  localStorage.setItem("order", JSON.stringify(a)); // تحويل المصفوفة إلى سلسلة نصية
  localStorage.setItem("Option", r);

  // إنشاء مصفوفة وإضافة القيم
  let array = [];
  array.push(fullName);
  array.push(password);
  array.push(date);
  array.push(x);
  array.push(phone);
  array.push(a);
  array.push(r);

  const customer = new Person(fullName, password, date, x, a, r);
  viewCard(customer);

  // عرض المصفوفة في وحدة التحكم
  console.log(array);
});

function Person(fullName, password, date) {
  this.fullName = fullName;
  this.password = password;
  this.date = date;
}

// تعريف الدالة viewCard
function viewCard(customer) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
        <p>Full Name: ${customer.fullName}</p>
        <p>Password: ${customer.password}</p>
        <p>Date of Birth: ${customer.date}</p>
    `;

  cardContainer.appendChild(card);

