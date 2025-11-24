import { Grid } from "./grid/Grid";
import { Columns } from "./inputs/Columns";
import { Rows } from "./inputs/Rows";
import { Width } from "./inputs/Width";

export default function Main() {
  return (
    <>
      <Width />
      <Columns />
      <Rows />
      <div>
        <Grid />
      </div>
    </>
  );
}
