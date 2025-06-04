import { format } from "date-fns";

interface OfferLetterTemplateProps {
  letterData: {
    candidateName: string;
    position: string;
    department: string;
    salary: string;
    startDate: Date;
    benefitsPackage: string;
    companyName: string;
    companyAddress: string;
    additionalNotes?: string;
    employmentType: string;
    signatoryName: string;
    signatoryTitle: string;
  };
}

export default function OfferLetterTemplate({ letterData }: OfferLetterTemplateProps) {
  const formatEmploymentType = (type: string) => {
    switch (type) {
      case "fullTime":
        return "Full-time";
      case "partTime":
        return "Part-time";
      case "contract":
        return "Contract";
      case "internship":
        return "Internship";
      default:
        return type;
    }
  };

  const currentDate = new Date();

  return (
    <div className="offer-letter font-serif leading-relaxed max-w-4xl mx-auto">
      <div className="letter-header mb-8">
        <h1 className="text-2xl font-bold text-center">{letterData.companyName}</h1>
        <p className="text-center text-gray-700 dark:text-gray-300">{letterData.companyAddress}</p>
        <p className="text-center text-gray-700 dark:text-gray-300">{format(currentDate, "MMMM d, yyyy")}</p>
      </div>

      <div className="recipient-info mb-6">
        <p className="font-semibold">{letterData.candidateName}</p>
        <p className="text-gray-700 dark:text-gray-300">[Candidate Address]</p>
      </div>

      <div className="subject mb-6">
        <p className="font-semibold">Subject: Offer of Employment - {letterData.position}</p>
      </div>

      <div className="salutation mb-4">
        <p>Dear {letterData.candidateName},</p>
      </div>

      <div className="letter-body space-y-4">
        <p>
          We are pleased to offer you the {formatEmploymentType(letterData.employmentType)} position of <strong>{letterData.position}</strong> in the {letterData.department} department at {letterData.companyName}, with the following terms and conditions:
        </p>

        <div className="offer-details ml-6 space-y-2">
          <p><strong>Start Date:</strong> {format(letterData.startDate, "MMMM d, yyyy")}</p>
          <p><strong>Compensation:</strong> {letterData.salary}</p>
          <p><strong>Benefits:</strong> {letterData.benefitsPackage}</p>
        </div>

        {letterData.additionalNotes && (
          <p>{letterData.additionalNotes}</p>
        )}

        <p>
          To accept this offer, please sign and return a copy of this letter by [Response Deadline]. If you have any questions or need further clarification, please don't hesitate to contact us.
        </p>

        <p>
          We look forward to welcoming you to our team and are confident that you will make a valuable contribution to {letterData.companyName}.
        </p>
      </div>

      <div className="closing mt-8">
        <p>Sincerely,</p>
        <div className="signature mt-8 mb-2">
          <div className="h-10 border-b border-dashed border-gray-400 w-48"></div>
        </div>
        <p className="font-semibold">{letterData.signatoryName}</p>
        <p>{letterData.signatoryTitle}</p>
        <p>{letterData.companyName}</p>
      </div>

      <div className="acceptance mt-12 pt-8 border-t border-gray-300">
        <p className="font-semibold mb-2">Acceptance of Offer:</p>
        <p>I, {letterData.candidateName}, accept the offer of employment as outlined above.</p>
        <div className="signature-line mt-8 mb-2">
          <div className="h-10 border-b border-dashed border-gray-400 w-48"></div>
        </div>
        <p>Signature</p>
        <div className="date-line mt-6 mb-2">
          <div className="h-10 border-b border-dashed border-gray-400 w-48"></div>
        </div>
        <p>Date</p>
      </div>
    </div>
  );
}