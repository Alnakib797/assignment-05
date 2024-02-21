const allBtn = document.getElementsByClassName('seat');
for (const btn of allBtn) {
  btn.addEventListener('click', function (event) {
    const seatName = event.target.parentNode.childNodes[1].innerText;

    const seatPrice = 500;

    const seatAddedTo = getConvertedValue('seat-added');
    if (seatAddedTo + 1 > 4) {
      alert('Your reached to limit');
      return;
    }

    const seatAdded = getConvertedValue('seat-added');
    document.getElementById('seat-added').innerText = seatAdded + 1;

    const seatLeft = getConvertedValue('seat-left');
    document.getElementById('seat-left').innerText = seatLeft - 1;

    const appendContainer = document.getElementById('append-container');
    event.target.setAttribute('disabled', false);
    event.target.style.backgroundColor = 'gray';

    const div = document.createElement('div');
    div.classList.add('flex');
    div.classList.add('justify-between');
    div.classList.add('text-xl');
    div.classList.add('text-gray-500');
    div.classList.add('font-bold');

    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');

    p1.innerText = seatName;
    p2.innerText = 'Economy';
    p3.innerText = seatPrice;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    appendContainer.appendChild(div);

    updateTotalPrice(seatPrice);
    updateGrandTotal();
  });
}

function updateGrandTotal(status) {
  const totalPrice = getConvertedValue('total-price');
  if (status == undefined) {
    document.getElementById('grand-total').innerText = totalPrice;
  } else {
    const couponCode = document.getElementById('coupon-code').value;
    if (couponCode == 'NEW15') {
      const discounted = totalPrice * 0.15;
      document.getElementById('grand-total').innerText =
        totalPrice - discounted;
    } else if (couponCode == 'Couple20') {
      const discounted2 = totalPrice * 0.2;
      document.getElementById('grand-total').innerText =
        totalPrice - discounted2;
    } else {
      alert('wrong coupon code');
    }
  }
}

function updateTotalPrice(value) {
  const totalPrice = getConvertedValue('total-price');
  const sum = totalPrice + parseInt(value);
  document.getElementById('total-price').innerText = sum;
}

function getConvertedValue(id) {
  const price = document.getElementById(id).innerText;
  const convertPrice = parseInt(price);
  return convertPrice;
}
