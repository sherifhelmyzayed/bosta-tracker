const stageDetect = (text: string) => {
    let stage;
    switch (text) {
        case "TICKET_CREATED":
            stage = 0
            break;
        case "PACKAGE_RECEIVED":
            stage = 1
            break;
        case "OUT_FOR_DELIVERY":
            stage = 2
            break;
        case "WAITING_FOR_CUSTOMER_ACTION":
            stage = 2
            break;
        case "DELIVERED":
            stage = 4
            break;
        case "DELIVERED_TO_SENDER":
            stage = 2
            break;

        default:
            stage = 0
    }
    return stage
}

export default stageDetect