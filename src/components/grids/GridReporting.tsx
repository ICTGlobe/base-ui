import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { snapshot, product, team, sales } from "../../test_data/reporting";

const GridReporting = () => {
  return (
    <>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 mb-4">
        <div className=" 2xl:col-span-1 xl:col-span-3 col-span-1">
          <Link href="#">
            <Card className="border-primary-foreground hover:bg-muted">
              <CardHeader>
                <CardTitle className="flex gap-2">
                  {snapshot.icon}
                  {snapshot.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{snapshot.body}</CardContent>
            </Card>
          </Link>
        </div>
        <div className=" col-span-1">
          <Link href="#">
            <Card className="hover:bg-muted">
              <CardHeader>
                <CardTitle className="flex gap-2">
                  {product.icon}
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{product.body}</CardContent>
            </Card>
          </Link>
        </div>
        <div className=" col-span-1">
          <Link href="#">
            <Card className="hover:bg-muted">
              <CardHeader>
                <CardTitle className="flex gap-2">
                  {team.icon}
                  {team.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{team.body}</CardContent>
            </Card>
          </Link>
        </div>
        <div className=" col-span-1">
          <Card className="bg-muted">
            <CardHeader>
              <CardTitle className="flex gap-2">
                {sales.icon}
                {sales.title}
              </CardTitle>
            </CardHeader>
            <CardContent>{sales.body}</CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
export default GridReporting;
