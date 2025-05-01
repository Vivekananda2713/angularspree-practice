export class PaymentMode {
  id: number;
  name: string;
  description: string;
  method_type: string;
  code: string;
  active?: boolean;
  live_mode?: boolean;
}


// Potential improvement: Add error handling