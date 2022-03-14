package testRun;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.*;


@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/features/Viva_TA_Exercise_API.feature",
        glue = "modules",
        monochrome = true,
        plugin = {"pretty","html:test-output"}
)
public class Runner {

}
