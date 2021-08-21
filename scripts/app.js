//Define
const Buttons = document.getElementsByTagName("button");
const BestPrice = document.getElementById("best-price");
const MemoryCost = document.getElementById("memory-cost");
const StorageCost = document.getElementById("storage-cost");
const DeliveryCharge = document.getElementById("delivery-charge");
const PromoCode = document.getElementById("promo-code");
const TotalPrices = document.getElementsByClassName("total-price");

//Promo Code
function AddPromoCode() {
    for (totalPrice of TotalPrices) {
        if (totalPrice.innerText < 0) {
            totalPrice.innerText = 0;
        };

        const previousTotal = parseFloat(totalPrice.innerText);
        const discount = (previousTotal * 20) / 100;
        totalPrice.innerText = previousTotal - discount;
        PromoCode.value = "";
    };
};

//Total Price
function TotalPrice() {
    const price = parseFloat(BestPrice.innerText) + parseFloat(MemoryCost.innerText) + parseFloat(StorageCost.innerText) + parseFloat(DeliveryCharge.innerText);

    for (totalPrice of TotalPrices) {
        totalPrice.innerText = price;
    };
};

//Button
for (button of Buttons) {
    button.addEventListener("click", function (event) {
        const clickedButton = event.target.innerText;

        //Memory
        if (clickedButton == "8GB unified memory") {
            MemoryCost.innerText = 0;
            TotalPrice();
        }

        else if (clickedButton == "16GB unified memory") {
            MemoryCost.innerText = 180;
            TotalPrice();
        }

        //Storage 
        else if (clickedButton == "256GB SSD storage") {
            StorageCost.innerText = 0;
            TotalPrice();
        }

        else if (clickedButton == "512GB SSD storage") {
            StorageCost.innerText = 100;
            TotalPrice();
        }

        else if (clickedButton == "1TB SSD storage") {
            StorageCost.innerText = 180;
            TotalPrice();
        }

        //Delivery
        else if (clickedButton == "Friday, Aug 25 FREE Prime Delivery") {
            DeliveryCharge.innerText = 0;
            TotalPrice();
        }

        else if (clickedButton == "Friday, Aug 21 Delivery charge $20") {
            DeliveryCharge.innerText = 20;
            TotalPrice();
        }

        //Promo Code
        else {
            if (PromoCode.value == "stevekaku") {
                AddPromoCode();
            };
        };
    });
};
