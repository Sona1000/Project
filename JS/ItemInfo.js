// 更換大圖
function changeImage(thumbnail) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnail.src;
}

// 增加數量
function increaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

// 減少數量
function decreaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// 選擇尺寸
function selectSize(size) {
    alert(`您選擇的尺寸是：${size}`);
}
