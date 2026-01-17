// export function convertToCents(amount: number) {
//   return Math.round(amount * 100);
// }


// export function convertToDollarUnit(amount: number) {
//   return amount / 100;
// }

// export function formatCurrency(amount: number) {
//   return new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   }).format(amount);
// }




// Convert rupees to paise (store in DB as integer)
export function convertToPaise(amount: number): number {
  return Math.round(amount * 100);
}

// Convert paise to rupees (read from DB)
export function convertFromPaise(amount: number): number {
  return amount / 100;
}

// Format number as Indian Rupees (₹)
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(amount);
}
