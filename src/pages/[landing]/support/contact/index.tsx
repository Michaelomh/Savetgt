import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactUsFormSchema = z.object({
  emailAddress: z.string().email('Email must be a valid email address'),
  message: z.string().min(10, { message: 'Message should be at least 10 characters.' }),
})

function ContactUsSection() {
  const contactUsForm = useForm<z.infer<typeof contactUsFormSchema>>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: {
      emailAddress: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof contactUsFormSchema>) {
    console.log(values)
  }

  return (
    <section className="w-full flex gap-8 justify-center">
      <div className=" h-full max-w-[1280px] px-16 flex flex-col gap-4 mt-[64px]">
        <div className="flex flex-col items-center">
          <h2 className="text-[36px] font-montserrat font-bold">Get in touch!</h2>
          <p className="text-[16px] font-inter font-normal text-neutral-500">
            Explore our help docs or contact the team.
          </p>
        </div>

        <div className="w-full">
          <Form {...contactUsForm}>
            <form onSubmit={contactUsForm.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={contactUsForm.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="example@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={contactUsForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Type your message here." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
