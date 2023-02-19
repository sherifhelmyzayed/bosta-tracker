const lib = [
    {
        eng: "DELIVERED",
        arr: "تم تسليم الشحنة"
    },
    {
        eng: "NOT DELIVERED",
        arr: "لم يتم الشحن"
    },
    {
        eng: "DELIVERED_TO_SENDER",
        arr: "تم الغاء الشحن"
    },
    {
        eng: "TICKET_CREATED",
        arr: "تم انشاء الشحنة"
    },
    {
        eng: "PACKAGE_RECEIVED",
        arr: "تم استلام الشحنة"
    },
    {
        eng: "IN_TRANSIT",
        arr: "في مرحلة انتقالية"
    },
    {
        eng: "NOT_YET_SHIPPED",
        arr: "لم يتم شحنه بعد"
    },
    {
        eng: "OUT_FOR_DELIVERY",
        arr: "خارج للتوصيل"
    },
    {
        eng: "WAITING_FOR_CUSTOMER_ACTION",
        arr: "في انتظار تصرف العميل"
    },
    {
        eng: "Nasr city",
        arr: "مدينة نصر"
    },
    {
        eng: "",
        arr: "تفاصيل الشحنة"
    },
    {
        eng: "",
        arr: "عنوان التسليم"
    },
    {
        eng: "Contact Us",
        arr: "تواصل معنا"
    },
    {
        eng: "shipping address",
        arr: "عنوان التسليم"
    },
    {
        eng: "shipping details",
        arr: "تفاصيل الشحنة"
    },
    {
        eng: "Tracker",
        arr: "التتيع"
    },
    {
        eng: "To proceed in the app add a tracking number. You can use one of the following to test",
        arr: "للمتابعة في التطبيق ، أضف رقم تتبع. يمكنك استخدام أحد الخيارات التالية للاختبار"
    },
    {
        eng: "ex: 6636234, 7234258, 9442984,1094442",
        arr: "امثلة: 6636234, 7234258, 9442984,1094442"
    },
    {
        eng: "TRACK",
        arr: "تتبع"
    },
    {
        eng: "Bosta",
        arr: "بوسطة"
    },
    {
        eng: "Home",
        arr: "الرئيسية"
    },
    {
        eng: "Pricing",
        arr: "الآسعار"
    },
    {
        eng: "Contact Sales",
        arr: "كلم المبيعات"
    },
    {
        eng: "Track Shipment",
        arr: "تتبع شحنتك"
    },
    {
        eng: "Login",
        arr: "تسجيل الدخول"
    },
    {
        eng: "Ticket created",
        arr: "تم انشاء الشحنة"
    },
    {
        eng: "Package received",
        arr: "تم استلام الشحنة"
    },
    {
        eng: "Out for delivery",
        arr: "الشحنة خرجت للتسليم"
    },
    {
        eng: "Package delivered",
        arr: "تم التسليم"
    },
    {
        eng: "Package number",
        arr: "رقم الشحنة"
    },
    {
        eng: "Last update",
        arr: "اخر تحديث"
    },
    {
        eng: "Seller",
        arr: "اسم التاجر"
    },
    {
        eng: "Delivery Date",
        arr: "موعد التسليم خلال"
    },
    {
        eng: "branch",
        arr: "الفرع"
    },
    {
        eng: "date",
        arr: "التاريخ"
    },
    {
        eng: "time",
        arr: "الوقت"
    },
    {
        eng: "details",
        arr: "تفاصيل"
    },
    {
        eng: "Do you have a proplem in your shipment",
        arr: "هل يوجد مشكلة في شحنتك؟"
    },
    {
        eng: "Contact Us",
        arr: "اتصل بنا"
    }
]

const translate = (text: string, lang: string) => {


    if (lang == "eng") {
        return text
    }

    const translatedValue = lib.filter((item) => (item.eng == text))

    if (translatedValue.length) {
        return translatedValue[0].arr
    } else {
        return text
    }

}

export default translate