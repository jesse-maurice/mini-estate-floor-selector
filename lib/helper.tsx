import { CheckCircle, Clock, XCircle } from "lucide-react";
import type { Status } from "types";

export const getStatusIcon = (status: Status) => {
  switch (status) {
    case "available":
      return <CheckCircle className="w-4 h-4" />;
    case "sold":
      return <XCircle className="w-4 h-4" />;
    case "reserved":
      return <Clock className="w-4 h-4" />;

    default:
      return null;
  }
};
