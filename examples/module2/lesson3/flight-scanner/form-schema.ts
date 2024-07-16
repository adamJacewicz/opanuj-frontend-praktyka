import { z } from 'zod';

const ERROR_MESSAGES = {
  ORIGIN_REQUIRED: 'Lokalizacja początkowa jest wymagana',
  DESTINATION_REQUIRED: 'Lokalizacja docelowa jest wymagana',
  START_DATE_FORMAT: 'Data początkowa musi mieć format DD-MM-YYYY',
  END_DATE_FORMAT: 'Data powrotu musi mieć format DD-MM-YYYY',
  END_DATE_REQUIRED: 'Data powrotu jest wymagana',
  INVALID_DATES: 'Data początkowa musi być przed datą powrotu'
};

function getDate(date: string) {
  return new Date(date.split('-').reverse().join('-'));
}

export const FormSchema = z.object({
  origin: z.string().min(1, { message: ERROR_MESSAGES.ORIGIN_REQUIRED }),
  destination: z.string().min(1, { message: ERROR_MESSAGES.DESTINATION_REQUIRED }),
  startDate: z.string().regex(/^\d{2}-\d{2}-\d{4}$/, { message: ERROR_MESSAGES.START_DATE_FORMAT }),
  endDate: z.string().optional(),
  trip: z.enum(['one-way', 'round-trip'])
}).superRefine((val, ctx) => {
  if (val.trip === 'round-trip') {
    if (val.endDate === '') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: ERROR_MESSAGES.END_DATE_REQUIRED,
        path: ['endDate']
      });
    }
    if (val.endDate) {
      if (!val.endDate.match(/^\d{2}-\d{2}-\d{4}$/)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: ERROR_MESSAGES.END_DATE_FORMAT,
          path: ['endDate']
        });
      }

      if (getDate(val.endDate) < getDate(val.startDate)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: ERROR_MESSAGES.INVALID_DATES,
          path: ['endDate', 'startDate']
        });
      }
    }
  }
});


export type FormValues = z.infer<typeof FormSchema>
