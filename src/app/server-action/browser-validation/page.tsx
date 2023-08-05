import { Form } from "./Form";

export default function Page() {
  return (
    <main>
      <h1 className="text-2xl font-bold">Browser Validation</h1>
      <p>use html client validation</p>
      <Form />
      <div className="mt-6">
        <h2 className="text-xl">TODO</h2>
        <ul>
          {[
            "spanでエラーメッセージを表示する",
            "入力値でフォームを出し分ける",
          ].map((text) => (
            <li key={text}>
              <label className="flex space-x-2">
                <input type="checkbox" />
                <span>{text}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
