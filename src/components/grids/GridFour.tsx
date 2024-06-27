import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const GridCardsFour = () => {
  return (
    <>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 mb-4">
        <div className=" 2xl:col-span-1 xl:col-span-3 col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>One</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
          </Card>
        </div>
        <div className=" col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Two</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
          </Card>
        </div>
        <div className=" col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Three</CardTitle>
            </CardHeader>
            <CardContent>Content</CardContent>
          </Card>
        </div>
        <div className=" col-span-1">
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
