import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  )
})
export const head: DocumentHead = {
  title: 'Road Tripper',
  meta: [
    {
      name: 'Road Trip to your favorite national park!',
      content: 'I am the front end to a road trip application that is in a java backend',
    },
  ],
};
