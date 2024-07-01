import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const GridCardsFour = () => {
  return (
    <>
      <div className="mb-4 grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="col-span-1 xl:col-span-3 2xl:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>One</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Two</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Three</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Four</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};
export default GridCardsFour;
