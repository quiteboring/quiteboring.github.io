interface FieldValueProps {
  value: string;
  valueClass: string;
}

interface Field {
  name: string;
  type: string;
  value: string;
  valueClass: string;
}

function getAge(): number {
  const birthday = new Date("2009-01-05");
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const hasHadBirthday =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());
  if (!hasHadBirthday) age--;
  return age;
}

function FieldValue({ value, valueClass }: FieldValueProps) {
  const arrayCallMatch = value.match(/^(\w+)\((.*)\)$/s);

  if (!arrayCallMatch) {
    return <span className={valueClass}>{value}</span>;
  }

  const [, fnName, argsString] = arrayCallMatch;
  const args = argsString.split(",").map((arg) => arg.trim());

  return (
    <>
      <span className="text-(--syntax-function)">{fnName}</span>
      <span className="text-(--syntax-punctuation)">(</span>
      {args.map((arg, i) => (
        <span key={i}>
          <span className="text-(--syntax-string)">{arg}</span>
          {i < args.length - 1 && <span className="text-(--syntax-punctuation)">, </span>}
        </span>
      ))}
      <span className="text-(--syntax-punctuation)">)</span>
    </>
  );
}

const fields: Field[] = [
  { name: "name", type: "String", value: '"quiteboring"', valueClass: "text-(--syntax-string)" },
  { name: "title", type: "String", value: '"Student"', valueClass: "text-(--syntax-string)" },
  { name: "openSource", type: "Boolean", value: "true", valueClass: "text-(--syntax-keyword)" },
  { name: "age", type: "Int", value: String(getAge()), valueClass: "text-(--syntax-number)" },
  { name: "location", type: "String", value: '"Michigan"', valueClass: "text-(--syntax-string)" },
  { name: "langs", type: "List<String>", value: 'arrayOf("Kotlin", "Java", "TypeScript")', valueClass: "" },
  { name: "hobbies", type: "List<String>", value: 'arrayOf("Reading", "Speedcubing", "Guitar")', valueClass: "" },
  { name: "discord", type: "String", value: '"@quiteboring.dev"', valueClass: "text-(--syntax-string)" },
];

export default function CodeEditor() {
  return (
    <div className="hidden overflow-hidden rounded-lg border border-(--text-secondary)/20 bg-(--background-tertiary)/50 lg:block w-full">
      <div className="border-b border-(--text-secondary)/20 px-5 py-3">
        <span className="text-xs text-(--text-secondary) mono">main.kt</span>
      </div>
      <div className="overflow-x-auto p-6 text-sm leading-relaxed">
        <pre className="mono">
          <span className="text-(--syntax-keyword)">data class </span>
          <span className="text-(--syntax-variable)">QuiteBoring</span>
          <span className="text-(--syntax-punctuation)">(</span>
          {"\n"}
          {fields.map((field, index) => (
            <span key={field.name}>
              <span className="text-(--text-secondary)">    </span>
              <span className="text-(--syntax-keyword)">val </span>
              <span className="text-(--syntax-function)">{field.name}</span>
              <span className="text-(--syntax-punctuation)">: </span>
              <span className="text-(--syntax-function)">{field.type}</span>
              <span className="text-(--syntax-punctuation)"> = </span>
              <FieldValue value={field.value} valueClass={field.valueClass} />
              <span className="text-(--syntax-punctuation)">{index < fields.length - 1 ? "," : ""}</span>
              {"\n"}
            </span>
          ))}
          <span className="text-(--text-secondary)">)</span>
        </pre>
      </div>
    </div>
  );
}