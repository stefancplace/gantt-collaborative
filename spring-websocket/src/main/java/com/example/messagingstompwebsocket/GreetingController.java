package com.example.messagingstompwebsocket;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {
	Greeting greeting = new Greeting("[\n" +
			"        {\n" +
			"            \"id\": \"0\",\n" +
			"            \"parentIndex\": 0,\n" +
			"            \"startDate\": \"2019-01-02T00:00:00+01:00\",\n" +
			"            \"endDate\": \"2019-01-05T00:00:00+01:00\",\n" +
			"            \"duration\": 3,\n" +
			"            \"durationUnit\": \"day\",\n" +
			"            \"cls\": \"\",\n" +
			"            \"name\": \"Launch SaaS Product\",\n" +
			"            \"direction\": \"Forward\",\n" +
			"            \"manuallyScheduled\": false,\n" +
			"            \"constraintType\": null,\n" +
			"            \"constraintDate\": null,\n" +
			"            \"percentDone\": 36.666666666666664,\n" +
			"            \"effort\": 360,\n" +
			"            \"effortUnit\": \"hour\",\n" +
			"            \"effortDriven\": false,\n" +
			"            \"schedulingMode\": \"Normal\",\n" +
			"            \"baselines\": [],\n" +
			"            \"parentId\": null,\n" +
			"            \"expanded\": true,\n" +
			"            \"children\": [\n" +
			"                {\n" +
			"                    \"id\": 1,\n" +
			"                    \"parentIndex\": 0,\n" +
			"                    \"startDate\": \"2019-01-02T00:00:00+01:00\",\n" +
			"                    \"endDate\": \"2019-01-05T00:00:00+01:00\",\n" +
			"                    \"duration\": 3,\n" +
			"                    \"durationUnit\": \"day\",\n" +
			"                    \"cls\": \"\",\n" +
			"                    \"name\": \"Setup web server\",\n" +
			"                    \"direction\": \"Forward\",\n" +
			"                    \"manuallyScheduled\": false,\n" +
			"                    \"constraintType\": null,\n" +
			"                    \"constraintDate\": null,\n" +
			"                    \"percentDone\": 36.666666666666664,\n" +
			"                    \"effort\": 360,\n" +
			"                    \"effortUnit\": \"hour\",\n" +
			"                    \"effortDriven\": false,\n" +
			"                    \"schedulingMode\": \"Normal\",\n" +
			"                    \"baselines\": [],\n" +
			"                    \"parentId\": \"0\",\n" +
			"                    \"expanded\": true,\n" +
			"                    \"children\": [\n" +
			"                        {\n" +
			"                            \"id\": 11,\n" +
			"                            \"parentIndex\": 0,\n" +
			"                            \"startDate\": \"2019-01-02T00:00:00+01:00\",\n" +
			"                            \"endDate\": \"2019-01-05T00:00:00+01:00\",\n" +
			"                            \"duration\": 3,\n" +
			"                            \"durationUnit\": \"day\",\n" +
			"                            \"cls\": \"\",\n" +
			"                            \"name\": \"Install Apache\",\n" +
			"                            \"direction\": \"Forward\",\n" +
			"                            \"manuallyScheduled\": false,\n" +
			"                            \"constraintType\": null,\n" +
			"                            \"constraintDate\": null,\n" +
			"                            \"percentDone\": 50,\n" +
			"                            \"effort\": 72,\n" +
			"                            \"effortUnit\": \"hour\",\n" +
			"                            \"effortDriven\": false,\n" +
			"                            \"schedulingMode\": \"Normal\",\n" +
			"                            \"baselines\": [],\n" +
			"                            \"parentId\": 1\n" +
			"                        },\n" +
			"                        {\n" +
			"                            \"id\": 12,\n" +
			"                            \"parentIndex\": 1,\n" +
			"                            \"startDate\": \"2019-01-02T00:00:00+01:00\",\n" +
			"                            \"endDate\": \"2019-01-05T00:00:00+01:00\",\n" +
			"                            \"duration\": 3,\n" +
			"                            \"durationUnit\": \"day\",\n" +
			"                            \"cls\": \"\",\n" +
			"                            \"name\": \"Configure firewall\",\n" +
			"                            \"direction\": \"Forward\",\n" +
			"                            \"manuallyScheduled\": false,\n" +
			"                            \"constraintType\": null,\n" +
			"                            \"constraintDate\": null,\n" +
			"                            \"percentDone\": 50,\n" +
			"                            \"effort\": 72,\n" +
			"                            \"effortUnit\": \"hour\",\n" +
			"                            \"effortDriven\": false,\n" +
			"                            \"schedulingMode\": \"Normal\",\n" +
			"                            \"baselines\": [],\n" +
			"                            \"parentId\": 1\n" +
			"                        },\n" +
			"                        {\n" +
			"                            \"id\": 13,\n" +
			"                            \"parentIndex\": 2,\n" +
			"                            \"startDate\": \"2019-01-02T00:00:00+01:00\",\n" +
			"                            \"endDate\": \"2019-01-05T00:00:00+01:00\",\n" +
			"                            \"duration\": 3,\n" +
			"                            \"durationUnit\": \"day\",\n" +
			"                            \"cls\": \"\",\n" +
			"                            \"name\": \"Setup load balancer\",\n" +
			"                            \"direction\": \"Forward\",\n" +
			"                            \"manuallyScheduled\": false,\n" +
			"                            \"constraintType\": null,\n" +
			"                            \"constraintDate\": null,\n" +
			"                            \"percentDone\": 50,\n" +
			"                            \"effort\": 72,\n" +
			"                            \"effortUnit\": \"hour\",\n" +
			"                            \"effortDriven\": false,\n" +
			"                            \"schedulingMode\": \"Normal\",\n" +
			"                            \"baselines\": [],\n" +
			"                            \"parentId\": 1\n" +
			"                        },\n" +
			"                        {\n" +
			"                            \"id\": 14,\n" +
			"                            \"parentIndex\": 3,\n" +
			"                            \"startDate\": \"2019-01-02T00:00:00+01:00\",\n" +
			"                            \"endDate\": \"2019-01-04T00:00:00+01:00\",\n" +
			"                            \"duration\": 2,\n" +
			"                            \"durationUnit\": \"day\",\n" +
			"                            \"cls\": \"\",\n" +
			"                            \"name\": \"Configure ports\",\n" +
			"                            \"direction\": \"Forward\",\n" +
			"                            \"manuallyScheduled\": false,\n" +
			"                            \"constraintType\": null,\n" +
			"                            \"constraintDate\": null,\n" +
			"                            \"percentDone\": 50,\n" +
			"                            \"effort\": 48,\n" +
			"                            \"effortUnit\": \"hour\",\n" +
			"                            \"effortDriven\": false,\n" +
			"                            \"schedulingMode\": \"Normal\",\n" +
			"                            \"baselines\": [],\n" +
			"                            \"parentId\": 1\n" +
			"                        },\n" +
			"                        {\n" +
			"                            \"id\": 15,\n" +
			"                            \"parentIndex\": 5,\n" +
			"                            \"startDate\": \"2019-01-02T00:00:00+01:00\",\n" +
			"                            \"endDate\": \"2019-01-04T00:00:00+01:00\",\n" +
			"                            \"duration\": 2,\n" +
			"                            \"durationUnit\": \"day\",\n" +
			"                            \"cls\": \"\",\n" +
			"                            \"name\": \"Run tests\",\n" +
			"                            \"direction\": \"Forward\",\n" +
			"                            \"manuallyScheduled\": false,\n" +
			"                            \"constraintType\": null,\n" +
			"                            \"constraintDate\": null,\n" +
			"                            \"percentDone\": 0,\n" +
			"                            \"effort\": 48,\n" +
			"                            \"effortUnit\": \"hour\",\n" +
			"                            \"effortDriven\": false,\n" +
			"                            \"schedulingMode\": \"Normal\",\n" +
			"                            \"baselines\": [],\n" +
			"                            \"parentId\": 1\n" +
			"                        }\n" +
			"                    ]\n" +
			"                }\n" +
			"            ]\n" +
			"        }\n" +
			"    ]");

	@MessageMapping("/hello")
	@SendTo("/topic/greetings")
	public Greeting greeting(HelloMessage message) throws Exception {
		return new Greeting("Hello, " + HtmlUtils.htmlEscape(message.getName()) + "!");
	}

}
