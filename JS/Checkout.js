// 更新小計和總計
function updateTotal() {
    const items = document.querySelectorAll(".cart-item");
    let subtotal = 0;

    items.forEach((item) => {
        const quantity = parseInt(item.querySelector(".quantity-input").value);
        const price = parseInt(
            item.querySelector(".item-price").textContent.replace(/[$,]/g, "")
        );
        const subtotalItem = quantity * price;

        item.querySelector(".item-subtotal").textContent = `$${subtotalItem.toLocaleString()}`;
        subtotal += subtotalItem;
    });

    document.getElementById("subtotal-price").textContent = `$${subtotal.toLocaleString()}`;

    const shippingMethod = document.getElementById("shipping-method");
    const shippingFee = parseInt(shippingMethod.value);
    document.getElementById("shipping-fee").textContent = `$${shippingFee.toLocaleString()}`;

    const total = subtotal + shippingFee;
    document.getElementById("total-price").textContent = `$${total.toLocaleString()}`;
}

// 刪除商品
function removeItem(button) {
    const item = button.parentElement;
    item.remove();
    updateTotal();
}

// 顯示或隱藏信用卡資訊
function toggleCreditCardInfo() {
    const paymentMethod = document.getElementById("payment-method").value;
    const creditCardInfo = document.getElementById("credit-card-info");

    if (paymentMethod === "online") {
        creditCardInfo.classList.remove("hidden");
    } else {
        creditCardInfo.classList.add("hidden");
    }
}

// 初始化數量輸入框事件
document.querySelectorAll(".quantity-input").forEach((input) => {
    input.addEventListener("change", (event) => {
        if (event.target.value < 1) event.target.value = 1;
        updateTotal();
    });
});

// 預設初始化
updateTotal();
toggleCreditCardInfo();
